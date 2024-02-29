export default function CreateForm(props){
  
  function handleSubmit(event) {
    event.preventDefault();
    props.onCreate({
      id: event.target.location.value,
      location: event.target.location.value,
      minimumCustomersPerHour: parseInt(event.target.minimumCustomersPerHour.value),
      maximumCustomersPerHour: parseInt(event.target.maximumCustomersPerHour.value),
      averageCookiesPerSale: parseInt(event.target.averageCookiesPerSale.value),
      hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],
    });

    event.target.reset();
  }

  return (
    <div className='w-2/3 mx-auto mt-8 bg-green-300 rounded-xl'>
    <legend className='flex justify-center pt-4 text-3xl'>Create Cookie Stand</legend>
      <form onSubmit={ handleSubmit } className="block py-5 mx-auto text-xl">
        <section className='flex w-full py-5 pr-8 text-xl'> 
          <label className="px-4 pl-8" htmlFor="location">Location</label>
          <input name="location" type="text" className='flex-auto'/>
        </section>
        <section className='flex justify-between px-5 text-lg text-center'>
          <p className="block w-1/4 p-2 mx-2 bg-green-200">
            <label htmlFor="minimumCustomersPerHour">Minimum Customers per Hour</label>
            <input name="minimumCustomersPerHour" type="number" className="flex-auto w-full" />
          </p>
          <p className="block w-1/4 p-2 mx-2 bg-green-200">
            <label htmlFor="maximumCustomersPerHour">Maximum Customers per Hour</label>
            <input name="maximumCustomersPerHour" type="number" className="flex-auto w-full" />

          </p>
          <p className="block w-1/4 p-2 mx-2 bg-green-200">
            <label htmlFor="averageCookiesPerSale">Average Cookies per Sale</label>
            <input name="averageCookiesPerSale" type="number" className="flex-auto w-full"/>
          </p>
          <p className="flex items-center justify-center w-1/4 mx-2 bg-green-500">
            <button type="submit">Create</button>
          </p>
        </section>
      </form>
    </div>
  );
}