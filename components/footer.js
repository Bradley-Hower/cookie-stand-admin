export default function Footer({rowCount}) {
  return (
    <footer>
      <p className='flex items-center h-24 text-2xl bg-green-500 px-9'>{rowCount} Locations Word Wide</p>
    </footer>
  );
}