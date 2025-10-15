import girl1 from "../assets/girl.png.png" 
import girl2 from "../assets/girl(2).png.png"
import { Card, CardContent } from "@/components/ui/card"

export  function BeforeAfterImage() {
  return (
    <div className="flex items-center justify-start min-h-screen bg-gray-50 px-10">
      <Card className=" mt-60 shadow-xl rounded-2xl overflow-hidden">
        <CardContent className="p-0">
          <img
            src={girl1}
            alt="Before and After"
            className="w-[500px] h-auto object-cover"
          />
          <img
            src={girl2}
            alt="Before and After 2"
            className="w-[500px] h-auto object-cover mt-6"
          />
        </CardContent>
      </Card>
    </div>
  )
}









// Import needed components from shadcn/ui
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export function StackedProfile() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 space-x-4">
    <div className="relative w-[500px] h-[685px]">
      <Card className="w-full h-full overflow-hidden p-0">
        <img
          src={girl1}
          alt="Main profile"
          className="object-cover w-full h-full"
        />
      </Card>
      <div className="bottom-[-80px] absolute left-[-60px] ">
        <img src={girl2} className="w-[180px] h-[180px] border-4 border-white shadow-lg">
        </img>
      </div>
    </div>
    </div>
  );
}

