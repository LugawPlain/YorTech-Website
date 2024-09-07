import HeaderNav from "@/components/HeaderNav";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import { Button } from "@/components/ui/button";
export default function Contacts() {
  return (
    <>
      <HeaderNav />
      <div className="mx-auto max-w-[750px] min-h-[780px] mb-12 w-full mt-32 rounded-lg bg-zinc-950 border-2 border-gray-700 ">
        <h1 className="text-center mt-8 text-4xl text-accent font-semibold font-sans">
          Contacts
        </h1>
        <form className="mt-8 px-20">
          <div className=" grid grid-rows-2 grid-cols-2 grid-flow-row gap-8 ">
            <div>
              <h3 className="mb-2 ">First Name:</h3>
              <Input
                placeholder="Enter your First Name"
                required={true}
              ></Input>
            </div>
            <div>
              <h3 className="mb-2 ">Last Name:</h3>
              <Input placeholder="Enter your Last Name" required={true}></Input>
            </div>
            <div className="col-span-2">
              <h3 className="mb-2 ">Email:</h3>
              <Input
                className=""
                placeholder="Enter a valid email address"
                required={true}
              ></Input>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="mb-2 ">Email:</h3>
            <Textarea
              className="bg-zinc-900 my-6 col-span-2"
              placeholder="Enter your message"
              rows={13}
              required
            />
          </div>
          <button
            className="mx-auto flex justify-center w-full rounded-md bg-sky-300 text-lg font-semibold tracking-wide text-zinc-700  px-3 py-2
          hover:bg-sky-200 border active:border-sky-300 active:bg-sky-100 mb-8"
          >
            <input type="submit" />
          </button>
        </form>
      </div>
    </>
  );
}
