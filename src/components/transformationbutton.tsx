import { Button } from "@/components/ui/button";

export  function TransformationGalleryButton() {
  return (
    <div className="flex justify-center my-10 w-full">
    <Button
      className="bg-[#b68b4c] text-white tracking-[0.2em] px-6 py-2 text-xs font-semibold uppercase 
                 hover:bg-[#a27a3f] transition-all duration-300 rounded-none shadow-none"
    >
      TRANSFORMATION GALLERY
    </Button>
    </div>
  );
}

export  function HeadingPage() {
  return (
    <div className="flex justify-center items-center w-ful bg-white">
      <h2 className="text-black text-2xl font-light tracking-[0.25em] uppercase">
        BEFORE & AFTER
      </h2>
    </div>
  );
}
