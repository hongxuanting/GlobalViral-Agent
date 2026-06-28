import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('generates the mocked global growth report after loading', async () => {
  render(<App />);

  expect(screen.getAllByText('GlobalViral Agent').length).toBeGreaterThan(1);
  expect(screen.getByText('Mobile Showcase')).toBeInTheDocument();
  expect(screen.getByText('AI Pilot Console')).toBeInTheDocument();
  expect(screen.getByText('Launch Cards')).toBeInTheDocument();
  expect(screen.queryByText('Growth Workspace')).not.toBeInTheDocument();
  expect(screen.queryByText('AI 出海增长工作台')).not.toBeInTheDocument();

  expect(screen.queryByText('点击进入应用工作台')).not.toBeInTheDocument();

  await userEvent.click(screen.getByRole('button', { name: /进入工作台/ }));

  expect(screen.getByText('Growth Workspace')).toBeInTheDocument();
  expect(screen.getByText('AI 出海增长工作台')).toBeInTheDocument();
  expect(screen.getByText('Product Setup')).toBeInTheDocument();
  expect(screen.queryByText('Growth Play Console')).not.toBeInTheDocument();

  await userEvent.click(screen.getByRole('button', { name: /生成全球增长方案/ }));

  expect(screen.getByText(/AI 正在分析商品卖点/)).toBeInTheDocument();

  await waitFor(() => expect(screen.getByText(/\d+ \/ 100/)).toBeInTheDocument(), {
    timeout: 2200,
  });

  expect(screen.getByText('Growth Play Console')).toBeInTheDocument();
  expect(screen.getByText('全球爆款潜力评分')).toBeInTheDocument();
  expect(screen.queryByText('商品输入区')).not.toBeInTheDocument();
  expect(screen.queryByText('A/B Test 实验建议')).not.toBeInTheDocument();

  await userEvent.click(screen.getByRole('button', { name: /下一页/ }));

  expect(screen.getByText('平台匹配矩阵')).toBeInTheDocument();
  expect(screen.getByText('TikTok Shop')).toBeInTheDocument();
});

test('generates a report from the edited product input', async () => {
  render(<App />);

  await userEvent.click(screen.getByRole('button', { name: /进入工作台/ }));

  await userEvent.clear(screen.getByDisplayValue('便携式迷你榨汁杯'));
  await userEvent.type(screen.getByLabelText('商品名称'), '球星手环');
  await userEvent.clear(screen.getByDisplayValue('厨房小家电'));
  await userEvent.type(screen.getByLabelText('商品类目'), '穿戴配件');
  await userEvent.clear(screen.getByDisplayValue('上班族、学生、健身人群'));
  await userEvent.type(screen.getByLabelText('目标用户'), '上班族、学生、运动爱好者，球迷');
  await userEvent.clear(screen.getByDisplayValue('便携、无线、易清洗、30秒榨汁'));
  await userEvent.type(screen.getByLabelText('商品卖点'), '好看、轻便、球星同款、适合穿搭');

  await userEvent.click(screen.getByRole('button', { name: /生成全球增长方案/ }));

  await waitFor(() => expect(screen.getByText(/\d+ \/ 100/)).toBeInTheDocument(), {
    timeout: 2200,
  });

  expect(screen.getByText(/球星手环 属于 穿戴配件/)).toBeInTheDocument();
  expect(screen.queryByText(/榨汁|smoothie|blender|Kitchen appliance/i)).not.toBeInTheDocument();

  await userEvent.click(screen.getByRole('button', { name: /下一页/ }));

  expect(screen.getAllByText(/穿戴配件/).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/球星手环/).length).toBeGreaterThan(0);
});
