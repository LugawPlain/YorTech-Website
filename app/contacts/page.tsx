import HeaderNav from "@/components/HeaderNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
export default function Contacts() {
  return (
    <>
      <HeaderNav />
      <div className="mx-auto max-w-[750px] w-full mt-32 text-black ">
        <div className="bg-slate-800 rounded-lg px-16 pt-8 pb-16 flex flex-col text-center mb-24 ">
          <div className="pb-4 w-full text-nowrap border-b-2 border-gray-700 text-accent mx-auto ">
            <h1 className="text-5xl ">Contact Us</h1>
          </div>
          <div className="flex justify-around gap-12 pt-8 pb-12">
            <Input
              placeholder="Enter your First Name"
              required
              className=" py-6"
            ></Input>
            <Input placeholder="Last Name" className=" py-6"></Input>
          </div>

          <div className="flex justify-around gap-12 flex-col ">
            <Input placeholder="Subject" className=" py-6 w-full"></Input>
            <Textarea
              placeholder="Describe your concern"
              className="h-48"
            ></Textarea>
          </div>

          <Button
            variant="outline"
            className="mt-12 text-accent border-accent hover:bg-accentLight text-xl py-4 bg-card"
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
}
