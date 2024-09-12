import Form from "@/components/Form";
import Header from "@/components/Header";
import Secondary from "@/components/Secondary";
import Video from "@/components/Video";
import Main from "@/components/Main";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-poppins h-full">
      <div className="font-quicksand">
        <Header />
      </div>

      <div className="flex justify-center mx-auto mt-20 max-w-6xl px-4">
        <div className="flex flex-col space-y-4 w-3/4 my-12">
          <Video width="680" />
          <Main />
        </div>

        <div className="flex flex-col space-y-4 w-2/5 ml-4">
          <div className="bg-teal-600 p-4  rounded-md">
            <Form />
          </div>
          <Secondary />
        </div>
      </div>
    </div>
  );
}
