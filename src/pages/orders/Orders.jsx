import { Tab } from '@headlessui/react';
import { useContext, useState } from 'react';
import { StateContext } from '../../context/StateProvider';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Orders() {
  const { orders } = useContext(StateContext);

  const [categories] = useState({
    "All Orders": orders,
    "Regular Delivery": orders.filter((product) => product.deliveryType === 'Regular Delivery'),
    "Express Delivery": orders.filter((product) => product.deliveryType === 'Express Delivery'),
  })

  return (
    <div className="w-full px-2 sm:px-0 mt-4 container mx-auto h-screen">
      <div>
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-gray-300 p-1">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white shadow'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((orders, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  'rounded-xl bg-white p-3',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                )}
              >
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                      <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          Product Name
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          Price
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          Delivery Type
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {orders.map((order) => (
                        <tr key={order.orderId}>
                          <td className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900">
                            {order.name}
                          </td>
                          <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">{order.price}</td>
                          <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">{order.deliveryType}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  )
}