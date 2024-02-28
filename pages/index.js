import Head from 'next/head';
import { stringify } from 'postcss';
import { useState } from 'react';

export default function Home() {
  const [reply, setReply] = useState(JSON.stringify(["Welcome"]));
  
  function formHandler(event) {
    event.preventDefault();
    event.target.reset();
    const arr = ["Report Table Coming Soon..."]
    setReply(JSON.stringify(arr));
  };

  return(
    <div className="">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main>
        <DataForm onSubmit={ formHandler }/>
        <Response reply={reply} />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="mb-4 text-6xl bg-green-500 p-7"><h2>Cookie Stand Admin</h2></header>
  );
}

function DataForm(props) {
  return (
    <div className='w-3/5 mx-auto my-12 bg-green-300 rounded-xl'>
      <p className='flex justify-center p-4 text-3xl'>Create Cookie Stand</p>
      <form onSubmit={ props.onSubmit } className="block px-6 py-5 mx-auto text-xl">
        <section className='flex py-5 text-xl'> 
          <label for="location">Location</label>
          <input name="dataprint" className='flex-auto w-full mx-5 w-pl-1'/>
        </section>
        <section className='flex justify-between'>
          <p className="block text-xl w-52">
            <label for="min_cust_hr">Minimum Customers per Hour</label>
            <input name="min_cust_hr" className="" />
          </p>
          <p className="block text-xl w-52">
            <label for="max_cust_hr">Maximum Customers per Hour</label>
            <input name="max_cust_hr" className="" />

          </p>
          <p className="block text-xl w-52">
            <label for="cookies_sale">Average Cookies per Sale</label>
            <input name="cookies_sale" className=""/>
          </p>
          <button className="flex items-center justify-center w-48 text-2xl bg-green-500 h-28">Create</button>
        </section>
      </form>
    </div>
  );
}

function Response(props) {
  return (
  <p className="flex justify-center py-24 text-gray-600r">{JSON.parse(props.reply)}</p>
  );
}

function Footer() {
  return (
    <footer>
      <p className='flex items-center h-24 px-12 text-2xl bg-green-500'>&copy;2023</p>
    </footer>
  );
}