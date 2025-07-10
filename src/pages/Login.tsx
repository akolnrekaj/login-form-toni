import { useNavigate } from "react-router";
import { useLoginContext } from "../context/LoginContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

export type LoginForm = {
  email: string;
  password: string;
};

const loginPageValidationSchema = z.object({
  email: z.string().email("neispravan imejl"),
  password: z.string(),
});

const Login = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useLoginContext();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginPageValidationSchema),
    mode: "onTouched",
  });

  const { email, password } = watch();

  const isDisabled = !email || !password;

  console.log(errors);

  const onSubmit = async ({ email, password }: LoginForm) => {
    const correctEmail = "abc@toni.com";
    const correctPassword = "def";

    if (email === correctEmail && password === correctPassword) {
      console.log("Login successful");
      setIsLoggedIn(true);
      navigate("/");
    } else {
      alert("Invalid credentials");
      setIsLoggedIn(false);
      navigate("/login");
    }
  };

  return (
    //form for login
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Enter email" {...register("email")} />
      {errors.email?.message}
      <input
        type="password"
        placeholder="Enter password"
        {...register("password")}
      />
      {errors.password?.message}

      <button disabled={isDisabled} type="submit">
        Login
      </button>
    </form>
  );
};

export default Login;
