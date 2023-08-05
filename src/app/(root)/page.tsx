import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  // To Change title Dynamiclly
  // useEffect(() => {
  //   document.title = "HI AMER"
  // },[])
  return (
    <div>
      Hi From Home Page
      <Button>Hello</Button>
    </div>
  );
}
