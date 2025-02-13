import MediaPage from "@/pages/media/page";
import WrapperPage from "@/pages/wrapperPage/page";

export default function Home() {

  return (
    <WrapperPage children={<MediaPage/>}/>
  );
}
