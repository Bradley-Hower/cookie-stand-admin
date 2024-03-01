import { useAuth } from '@/contexts/auth';
import useResource from '../hooks/useResource'
import { hours } from '../data';
import Head from '@/components/head';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Home() {
  const { user, login } = useAuth();

  return(
    <div>
      <Head /> 
      {user ? 
              <> 
                <h1>Logged in: {user.email}</h1>
                <CookieStandAdmin />
              </>
            :
                <LoginForm onLogin={login} />
      }    
      <Header />
      <Footer rowCount={rowCount}/>
    </div>
  );
}

function CookieStandAdmin() {
  const { resources, deleteResources } = useResource();

  return (
    <>
      <CookieStandForm />
      <CookieStandTable stand={resources || []} deteleStand={deleteResources} hours={hours}/>
    </>
  )
}

function CookieStandForm() {

  const { user } = useAuth();
  const { createResource } = useResource();

  function handleSubmit(event) {
      event.preventDefault();
      const info = {
          location: event.target.location.value,
          minimum_customers_per_hour: parseInt(event.target.minimum.value),
          maximum_customers_per_hour: parseInt(event.target.maximum.value),
          average_cookies_per_sale: parseFloat(event.target.average.value),
          owner: user.id,
      };
      createResource(info);

  }

  return (
      <form onSubmit={handleSubmit}>
          <fieldset>
              <legend>Create Cookie Stand</legend>
              <input placeholder='location' name='location' />
              <input placeholder='minimum' name='minimum' />
              <input placeholder='maximum' name='maximum' />
              <input placeholder='average' name='average' />
              <button>create</button>
          </fieldset>
      </form>
  );
}

function CookieStandTable({ stands, deleteStand, hours }) {

  const headers = ['Location', ...{hours}, 'Totals'];
  
  return (
      <table className="w-2/3 mx-auto my-8 bg-green-300 rounded-lg">
        <HeaderRow headerValues={headers} />
          <tbody>
              {stands.map(stand => (

                  <CookieStandRow key={stand.id} info={stand} deleteStand={deleteStand} />
              ))}
          </tbody>
      </table>
  );
}

function HeaderRow({ headerValues }){
  return (
    <thead className="bg-green-500">
      <tr>
        {headerValues.map((header, index) => {
          let className = "";
          if (index === 0){
            className = "rounded-tl";
          } else if (index === headerValues.length - 1){
            className = "rounded-tr";
          }
          return <th className={className} key={header}>{header}</th>
        })}
      </tr>
    </thead>
  )
}

function CookieStandRow({ info, deleteStand }) {

  function clickHandler() {
      deleteStand(info.id);
  }

  if (info.hourly_sales.length == 0) {
      // bunk data
      info.hourly_sales = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  }

  return (
      <tr className="odd:bg-green-400">
          <td>{info.location} <button onClick={clickHandler}>[x]</button></td>
          {info.hourly_sales.map((slot,index) => <td className="pl-4 border border-green-900" key={index}>{slot}</td>)}
          <td>{info.hourly_sales.reduce((num, sum) => num + sum, 0)}</td>
      </tr>
  );
}

function LoginForm({ onLogin }) {

  async function handleSubmit(event) {
      event.preventDefault();
      onLogin(event.target.username.value, event.target.password.value);
  }

  return (
      <form onSubmit={handleSubmit}>
          <fieldset autoComplete='off'>
              <legend>Log In</legend>
              <label htmlFor="username">Username</label>
              <input name="username" />
              <label htmlFor="password">Password</label>
              <input type="password" name="password" />
              <button>Log In</button>
          </fieldset>
      </form>
  );
}