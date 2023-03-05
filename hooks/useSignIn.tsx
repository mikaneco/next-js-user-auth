
import { useState, useCallback } from 'react';


export const useSignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    
    const handleSubmit = useCallback(
        async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            alert(`email: ${email}, password: ${password}`);
        } catch (err) {
            console.log(err);
        }
        setIsSubmitting(false);
    }, [email, password]);
    return {
        email,
        setEmail,
        password,
        setPassword,
        isSubmitting,
        handleSubmit,
    };
};

