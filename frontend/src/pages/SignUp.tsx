import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import Logo from "@/assets/Circle-light-mode.svg";

const SignUp = () => {
  return (
    <div className="w-full h-[100vh] lg:grid lg:grid-cols-2 ">
      <div className="mt-20 flex w-full  h-full justify-center lg:mt-0 lg:items-center">
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <div className="mb-4 flex items-center gap-2">
              <img src={Logo} alt="logo" />
              <h1 className="font-semibold text-2xl">Circle</h1>
            </div>
            <CardTitle className="text-xl">Sign Up</CardTitle>
            <CardDescription>
              Enter your information to create an account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" placeholder="Max" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" placeholder="Robinson" required />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              <Button type="submit" className="w-full">
                Create an account
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link to="/login" className="underline">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
      <img
        src="https://i.pinimg.com/564x/ea/6d/92/ea6d92b66ec462b91414994478508795.jpg"
        alt="banner"
        className="w-full hidden lg:flex object-cover  h-[100vh]"
      />
    </div>
  );
};

export default SignUp;
