import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from './LoginForm';

describe('LoginForm component', () => {
    it('should render a form with input fields and a submit button', () => {
        const wrapper = shallow(<LoginForm />);
        const form = wrapper.find('form');
        expect(form).toHaveLength(1);

        const emailInput = wrapper.find('input[type="email"]');
        expect(emailInput).toHaveLength(1);

        const passwordInput = wrapper.find('input[type="password"]');
        expect(passwordInput).toHaveLength(1);

        const submitButton = wrapper.find('button[type="submit"]');
        expect(submitButton).toHaveLength(1);
    });

    it('should update email state when the email input value changes', () => {
        const wrapper = shallow(<LoginForm />);
        const emailInput = wrapper.find('input[type="email"]');
        emailInput.simulate('change', { target: { value: 'test@example.com' } });
        expect(wrapper.state('email')).toEqual('test@example.com');
    });

    it('should update password state when the password input value changes', () => {
        const wrapper = shallow(<LoginForm />);
        const passwordInput = wrapper.find('input[type="password"]');
        passwordInput.simulate('change', { target: { value: 'password123' } });
        expect(wrapper.state('password')).toEqual('password123');
    });

    it('should call the onLoginSuccess prop when the form is submitted', () => {
        const onLoginSuccessMock = jest.fn();
        const wrapper = shallow(<LoginForm onLoginSuccess={onLoginSuccessMock} />);
        const form = wrapper.find('form');
        form.simulate('submit', { preventDefault: jest.fn() });
        expect(onLoginSuccessMock).toHaveBeenCalledTimes(1);
    });
});

