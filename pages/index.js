import { useState } from 'react';
import { hours } from '../data';
import Head from '@/components/head';
import Header from '@/components/header';
import CreateForm from '@/components/create-form';
import ReportTable from '@/components/report-table';
import Footer from '@/components/footer';

export default function Home() {
  const [standReports, setStandReports] = useState([]);
  
  function handleCreate(standInfo){
    setStandReports([...standReports, standInfo]);
  };

  const rowCount = standReports.length;

  return(
    <div>
      <Head />     
      <Header />

      <main>
        <CreateForm onCreate={handleCreate} />
        <ReportTable reports={standReports} hours={hours}/>
      </main>
      <Footer rowCount={rowCount}/>
    </div>
  );
}
