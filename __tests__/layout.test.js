import { render, screen } from '@testing-library/react'
import App from '../components/layout'
import '@testing-library/jest-dom'
 
test ( 'renders layout', () =>{
render(<App />);
const linkElement = screen.getByText(/NFL QBs/i)
expect (linkElement).toBeInTheDocument();
}
);