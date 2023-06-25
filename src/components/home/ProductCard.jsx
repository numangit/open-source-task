/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
  const { name, description, price, image, deliveryOption } = product || {};

  return (
    <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100 bg-slate-50">
      <img
        alt="Home"
        src={image}
        className="h-56 w-full rounded-md object-cover"
      />
      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">Name</dt>
            <dd className="font-medium">{name}</dd>
          </div>
          <div>
            <dt className="sr-only">Description</dt>
            <dd className="text-xs">{description.substring(0, 145 + 1)}..</dd>
          </div>
        </dl>
        <div className="mt-6 flex items-center text-xs justify-between">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-4 w-4 text-indigo-700 mx-auto"
            >

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
            </svg>


            <div className="mt-1.5 sm:mt-0">
              {/* <p className="text-gray-500">Price</p> */}
              <p className="text-base font-medium">${price}</p>
            </div>
          </div>
          <button className="btn btn-sm bg-indigo-400 px-3 py-2 rounded-md text-white ">
            Order now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;