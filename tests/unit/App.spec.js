import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/vue';
import App from '@/App.vue';
import { routes } from '@/router';
import { store } from '@/store';

describe('App.vue', () => {
  it('Test the page will enter counter page when click counter link', async () => {
    const { getByText } = render(App, { routes, store });
    const counterLink = getByText('Counter');

    await fireEvent.click(counterLink);

    expect(getByText('This Is A Counter Page')).toBeInTheDocument();
  });
});
