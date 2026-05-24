import { HomeModule } from "../modules/home";
import { MainLayout } from "../layouts/main";

export default function Home() {
  return (
    <MainLayout>
      <HomeModule />
    </MainLayout>
  );
}
