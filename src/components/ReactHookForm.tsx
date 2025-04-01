import { useForm } from 'react-hook-form';

type ReactHookFormData = {
  name: string;
  email: string;
};

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ReactHookFormData>();

  const onSubmit = (data: ReactHookFormData) => {
    console.log('React Hook Form Submitted Data:', data);
    reset();
  };

  return (
    <>
      <h1>React Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <>
          <label htmlFor="name">Имя:</label>
          <input
            id="name"
            {...register('name', { required: 'Имя обязательно' })}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
        </>

        <>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            {...register('email', {
              required: 'Email обязателен',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Неверный формат email',
              },
            })}
          />
          {errors.email && (
            <p style={{ color: 'red' }}>{errors.email.message}</p>
          )}
        </>

        <button type="submit">Отправить</button>
      </form>
    </>
  );
};

export default ReactHookForm;
