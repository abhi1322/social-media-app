import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const { toast } = useToast();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async () => {
    try {
      // Send login request to backend
      const response = await axios.post("http://localhost:8080/users/login", {
        username: username,
        password: password,
      });

      console.log(response);
      if (response.data.user) {
        toast({
          title: "Login successful",
          description: `Welcome back! ${response.data.user.username}`,
        });
      }

      // Save token and user data
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.user.id);
      localStorage.setItem("username", response.data.user.username);
      localStorage.setItem("username", response.data.user.email);
      localStorage.setItem("username", response.data.user.firstname);
      localStorage.setItem("username", response.data.user.lastname);

      navigate("/dashboard");
    } catch (err) {
      setError("Invalid username or password");
      console.error("Login failed", err);
      toast({
        title: "Login failed",
        description: error,
      });
    }
  };

  return (
    <div className="w-full lg:grid lg:grid-cols-2 h-full">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your username below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="input"
                placeholder="random24"
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                id="password"
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full" onClick={handleSubmit}>
              Login
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <img
          src="https://i.pinimg.com/564x/ea/6d/92/ea6d92b66ec462b91414994478508795.jpg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-[100vh] w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
};

export default Login;
