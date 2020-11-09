import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/vue';
import Counter from '@/views/Counter.vue';
import { store } from '@/store';

describe('Counter.vue', () => {
  it('目前點擊：0 will update to 目前點擊：1 after click 點我加一 button', async () => {
    const { getByText } = render(Counter, { store });
    const incrementBtn = getByText('點我加一');
    expect(getByText('目前點擊：0')).toBeInTheDocument();

    await fireEvent.click(incrementBtn);

    expect(getByText('目前點擊：1')).toBeInTheDocument();
  });
});
