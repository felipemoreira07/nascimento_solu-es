import { Header } from "../../components/Header/Header";
import { Mission } from "../../components/Mission/Mission";
import { Numbers } from "../../components/Numbers/Numbers";
import { Summary } from "../../components/Summary/Summary";

export const Principal = () => {
  return (
    <>
      <Header />
      <Summary />
      <Numbers />
      <Mission />
    </>
  );
};
