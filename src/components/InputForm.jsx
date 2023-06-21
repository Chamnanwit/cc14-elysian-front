import createClasses from '../utils/create-classes';

export default function InputForm({
<<<<<<< HEAD
  labelName,
=======
>>>>>>> cdc4f7f5a96877e95800f897cb2b1974cae167c8
  placeholder,
  value,
  onChange,
  name,
  isInvalid
}) {
  const className = createClasses(
<<<<<<< HEAD
    'block w-full border bg-gray-50 rounded-md px-3 py-2 outline-none focus:ring-1',
=======
    'block w-full border rounded-md px-4 py-3.5 outline-none focus:ring-1',
>>>>>>> cdc4f7f5a96877e95800f897cb2b1974cae167c8
    isInvalid
      ? 'border-red-500 focus:ring-red-300'
      : 'border-gray-300 focus:border-blue-500 focus:ring-blue-300'
  );
  return (
<<<<<<< HEAD
    <>
      <label htmlFor={name} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{labelName}</label>
      <input
        id={name}
        type="text"
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </>
=======
    <input
      type="text"
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    />
>>>>>>> cdc4f7f5a96877e95800f897cb2b1974cae167c8
  );
}