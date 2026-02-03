// TODO: Ajouter des liens pertinents dans le footer
export default function Footer() {
  return (
    <footer className="flex flex-row justify-center items-center w-full py-3 px-8 border-t-3 border-gray-200 mt-10 gap-4">
    <p className="text-center text-sm">
        &copy; {new Date().getFullYear()} USL Arts Martiaux.
      </p>
    </footer>
  );
}