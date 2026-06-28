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

  await userEvent.click(screen.getByRole('button', { name: /进入增长工作台/ }));

  expect(screen.getByText('Growth Workspace')).toBeInTheDocument();
  expect(screen.getByText('AI 出海增长工作台')).toBeInTheDocument();

  await userEvent.click(screen.getByRole('button', { name: /生成全球增长方案/ }));

  expect(screen.getByText(/AI 正在分析商品卖点/)).toBeInTheDocument();

  await waitFor(() => expect(screen.getByText('86 / 100')).toBeInTheDocument(), {
    timeout: 2200,
  });

  expect(screen.getAllByText('TikTok Shop').length).toBeGreaterThan(1);
  expect(screen.getByText('A/B Test 实验建议')).toBeInTheDocument();
});
