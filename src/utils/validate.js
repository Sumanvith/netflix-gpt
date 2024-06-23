export const checkValidData = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );
  if (!isEmailValid) return "Invalid Email ID";
  if (!isPasswordValid) return "Invalid Password";

  return null;
};

export const checkValidName = (email, password, name) => {
  const isNameValid = /^([a-zA-z,/.-]+)\s([a-zA-z,/.-]+)$/.test(name);
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );
  if (!isNameValid) return "Invalid Name";
  if (!isEmailValid) return "Invalid Email ID";
  if (!isPasswordValid) return "Invalid Password";

  return null;
};
