import {
  DashboardPage,
  DashboardWithHeader,
  DashboardContainer,
  CreditAndDebitContainer,
} from "./styledComponents";

import DashboardDebitCard from "../DashboardDebitCard";
import DashboardCreditCard from "../DashboardCreditCard";
import Header from "../Header";
import SideNavbar from "../SideNavbar";
import DashboardLastTransactions from "../DashboardLastTransactions";
import BarchartForDashboard from "../BarchartForDashboard";

const Dashboard = () => (
  <DashboardPage>
    <SideNavbar />
    <DashboardWithHeader>
      <Header heading={"Accounts"} />
      <DashboardContainer>
        <CreditAndDebitContainer>
          <DashboardCreditCard />
          <DashboardDebitCard />
        </CreditAndDebitContainer>
        <DashboardLastTransactions />
        <BarchartForDashboard/>
      </DashboardContainer>
    </DashboardWithHeader>
  </DashboardPage>
);

export default Dashboard;
