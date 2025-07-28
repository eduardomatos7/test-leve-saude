import DashboardLayout from "../../components/dashboard/DashboardLayout";

function HomeScreen() {
  return (
    <DashboardLayout>
      <div className="flex h-[calc(100vh-64px)] flex-col items-center justify-center gap-6 p-4 md:p-6">
        <h1 className="text-primary text-2xl font-bold">Área administrativa!</h1>
        <h2 className="text-text text-center text-xl font-normal">
          Acesse Feedbacks para ver todas as avaliações!
        </h2>
      </div>
    </DashboardLayout>
  );
}

export default HomeScreen;
