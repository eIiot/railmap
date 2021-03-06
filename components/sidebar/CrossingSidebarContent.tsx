// OBJECTID

import { USCrossingData } from '../MapDataTypes'

interface CrossingSidebarContentProps {
  /** Array of style options */
  crossingData: USCrossingData
}

const reasonIdData = {
  '14': 'Change in Data',
  '15': 'New Crossing',
  '16': 'Closed',
  '19': 'Re-Open',
  '20': 'Date Change Only',
  '21': 'Change in Primary Operating RR',
  '22': 'Admin. Correction',
  '23': 'Quiet Zone Update',
  '24': 'No Train Traffic',
  '0': 'Unknown',
} as { [key: string]: string }

const stateCodes = {
  '01': 'Alabama',
  '02': 'Alaska',
  '04': 'Arizona',
  '05': 'Arkansas',
  '06': 'California',
  '08': 'Colorado',
  '09': 'Connecticut',
  '10': 'Delaware',
  '11': 'District of Columbia',
  '12': 'Florida',
  '13': 'Geogia',
  '15': 'Hawaii',
  '16': 'Idaho',
  '17': 'Illinois',
  '18': 'Indiana',
  '19': 'Iowa',
  '20': 'Kansas',
  '21': 'Kentucky',
  '22': 'Louisiana',
  '23': 'Maine',
  '24': 'Maryland',
  '25': 'Massachusetts',
  '26': 'Michigan',
  '27': 'Minnesota',
  '28': 'Mississippi',
  '29': 'Missouri',
  '30': 'Montana',
  '31': 'Nebraska',
  '32': 'Nevada',
  '33': 'New Hampshire',
  '34': 'New Jersey',
  '35': 'New Mexico',
  '36': 'New York',
  '37': 'North Carolina',
  '38': 'North Dakota',
  '39': 'Ohio',
  '40': 'Oklahoma',
  '41': 'Oregon',
  '42': 'Pennsylvania',
  '44': 'Rhode Island',
  '45': 'South Carolina',
  '46': 'South Dakota',
  '47': 'Tennessee',
  '48': 'Texas',
  '49': 'Utah',
  '50': 'Vermont',
  '51': 'Virginia',
  '53': 'Washington',
  '54': 'West Virginia',
  '55': 'Wisconsin',
  '56': 'Wyoming',
} as { [key: string]: string }

function isEmptyOrSpaces(str: string | number | undefined) {
  return typeof str == 'number' || str === undefined || str.match(/^ *$/) !== null
}

function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + (string.slice(1) ?? '').toLowerCase()
}

function titleCase(input: unknown) {
  if (typeof input === 'string') {
    return (
      input
        // split at non-alphanumeric characters
        .split(/[^\w]/)
        .map((word) => (word.length > 2 ? capitalize(word) : word))
        .join(' ')
    )
  } else if (typeof input === 'number') {
    return input.toString()
  } else {
    return ''
  }
}

const CrossingSidebarContent = (props: CrossingSidebarContentProps) => {
  const { crossingData } = props
  return (
    <div className="flex h-full w-full flex-shrink-0 flex-col items-center rounded-t-md bg-white md:rounded-md">
      <div className="w-full px-2 py-4 text-center text-2xl">
        {titleCase(crossingData['STREET'] ?? 'Unknown Street')}
      </div>
      {/* <div className="text-md w-full px-2 pb-2 text-center">
        {crossingData.stations[0].stationName} -&gt;{' '}
        {
          crossingData.stations[crossingData.stations.length - 1]
            .stationName
        }
      </div> */}
      <div className="flex w-full max-w-md flex-[1] flex-col overflow-y-scroll px-2">
        <div className="bg-white p-3">
          <ul className="w-full children:mb-4">
            {!isEmptyOrSpaces(crossingData['RAILROAD']) ? (
              <li className="hover:bg-coolGray-100 relative rounded-md p-3">
                <h3 className="text-sm font-medium leading-5">Railroad</h3>

                <ul className="text-coolGray-500 mt-1 flex space-x-1 text-xs font-normal leading-4">
                  <li>{crossingData['RAILROAD']}</li>
                </ul>
                <a className="absolute inset-0 rounded-md ring-2 ring-red-400" />
              </li>
            ) : null}
            {!isEmptyOrSpaces(crossingData['RRSUBDIV']) ? (
              <li className="hover:bg-coolGray-100 relative rounded-md p-3">
                <h3 className="text-sm font-medium leading-5">Subdivision</h3>

                <ul className="text-coolGray-500 mt-1 flex space-x-1 text-xs font-normal leading-4">
                  <li>{crossingData['RRSUBDIV']}</li>
                </ul>
                <a className="absolute inset-0 rounded-md ring-2 ring-red-400" />
              </li>
            ) : null}
            {!isEmptyOrSpaces(crossingData['RRDIV']) ? (
              <li className="hover:bg-coolGray-100 relative rounded-md p-3">
                <h3 className="text-sm font-medium leading-5">Division</h3>

                <ul className="text-coolGray-500 mt-1 flex space-x-1 text-xs font-normal leading-4">
                  <li>{crossingData['RRDIV']}</li>
                </ul>
                <a className="absolute inset-0 rounded-md ring-2 ring-red-400" />
              </li>
            ) : null}
            {!isEmptyOrSpaces(crossingData['MILEPOST']) ? (
              <li className="hover:bg-coolGray-100 relative rounded-md p-3">
                <h3 className="text-sm font-medium leading-5">Milepost</h3>

                <ul className="text-coolGray-500 mt-1 flex space-x-1 text-xs font-normal leading-4">
                  <li>{crossingData['MILEPOST']}</li>
                </ul>
                <a className="absolute inset-0 rounded-md ring-2 ring-red-400" />
              </li>
            ) : null}
            {!isEmptyOrSpaces(crossingData['CROSSING']) ? (
              <li className="hover:bg-coolGray-100 relative rounded-md p-3">
                <h3 className="text-sm font-medium leading-5">Crossing ID</h3>

                <ul className="text-coolGray-500 mt-1 flex space-x-1 text-xs font-normal leading-4">
                  <li>{crossingData['CROSSING']}</li>
                </ul>
                <a className="absolute inset-0 rounded-md ring-2 ring-red-400" />
              </li>
            ) : null}
            {!isEmptyOrSpaces(crossingData['TYPEXING']) ? (
              <li className="hover:bg-coolGray-100 relative rounded-md p-3">
                <h3 className="text-sm font-medium leading-5">Crossing Type</h3>

                <ul className="text-coolGray-500 mt-1 flex space-x-1 text-xs font-normal leading-4">
                  <li>
                    {crossingData['TYPEXING'] === '2'
                      ? 'Public'
                      : crossingData['TYPEXING'] === '3'
                      ? 'Private'
                      : 'Other'}
                  </li>
                </ul>
                <a className="absolute inset-0 rounded-md ring-2 ring-red-400" />
              </li>
            ) : null}
            {!isEmptyOrSpaces(crossingData['WHISTBAN']) ? (
              <li className="hover:bg-coolGray-100 relative rounded-md p-3">
                <h3 className="text-sm font-medium leading-5">Quiet Zone</h3>

                <ul className="text-coolGray-500 mt-1 flex space-x-1 text-xs font-normal leading-4">
                  <li>
                    {crossingData['WHISTBAN'] === '0'
                      ? 'No'
                      : crossingData['WHISTBAN'] === '1'
                      ? '24 hr'
                      : crossingData['WHISTBAN'] === '2'
                      ? 'Partial'
                      : crossingData['WHISTBAN'] === '3'
                      ? 'Chicago Excused'
                      : 'Unknown Zone Type'}
                  </li>
                </ul>
                <a className="absolute inset-0 rounded-md ring-2 ring-red-400" />
              </li>
            ) : null}
            {!isEmptyOrSpaces(crossingData['HIGHWAY']) ? (
              <li className="hover:bg-coolGray-100 relative rounded-md p-3">
                <h3 className="text-sm font-medium leading-5">Highway</h3>

                <ul className="text-coolGray-500 mt-1 flex space-x-1 text-xs font-normal leading-4">
                  <li>{crossingData['HIGHWAY']}</li>
                </ul>
                <a className="absolute inset-0 rounded-md ring-2 ring-red-400" />
              </li>
            ) : null}
            {!isEmptyOrSpaces(crossingData['CountyCode']) ? (
              <li className="hover:bg-coolGray-100 relative rounded-md p-3">
                <h3 className="text-sm font-medium leading-5">County Code</h3>

                <ul className="text-coolGray-500 mt-1 flex space-x-1 text-xs font-normal leading-4">
                  <li>{crossingData['CountyCode']}</li>
                </ul>
                <a className="absolute inset-0 rounded-md ring-2 ring-red-400" />
              </li>
            ) : null}
            {!isEmptyOrSpaces(crossingData['StateCode']) ? (
              <li className="hover:bg-coolGray-100 relative rounded-md p-3">
                <h3 className="text-sm font-medium leading-5">State</h3>

                <ul className="text-coolGray-500 mt-1 flex space-x-1 text-xs font-normal leading-4">
                  <li>{stateCodes[crossingData['StateCode']!] ?? 'Unknown State'}</li>
                </ul>
                <a className="absolute inset-0 rounded-md ring-2 ring-red-400" />
              </li>
            ) : null}
            {!isEmptyOrSpaces(crossingData['POLCONT']) ? (
              <li className="hover:bg-coolGray-100 relative rounded-md p-3">
                <h3 className="text-sm font-medium leading-5">Emergency Telephone</h3>

                <ul className="text-coolGray-500 mt-1 flex space-x-1 text-xs font-normal leading-4">
                  <li>
                    <a className="text-blue-400" href={'tel:' + crossingData['POLCONT']}>
                      {crossingData['POLCONT']}
                    </a>
                  </li>
                </ul>
                <a
                  className="absolute inset-0 rounded-md ring-2 ring-red-400"
                  href={'tel:' + crossingData['POLCONT']}
                />
              </li>
            ) : null}
            {!isEmptyOrSpaces(crossingData['RRCONT']) ? (
              <li className="hover:bg-coolGray-100 relative rounded-md p-3">
                <h3 className="text-sm font-medium leading-5">Railroad Contact</h3>

                <ul className="text-coolGray-500 mt-1 flex space-x-1 text-xs font-normal leading-4">
                  <li>
                    <a className="text-blue-400" href={'tel:' + crossingData['RRCONT']}>
                      {crossingData['RRCONT']}
                    </a>
                  </li>
                </ul>
                <a
                  className="absolute inset-0 rounded-md ring-2 ring-red-400"
                  href={'tel:' + crossingData['RRCONT']}
                />
              </li>
            ) : null}
            {!isEmptyOrSpaces(crossingData['EFFDATE']) ? (
              <li className="hover:bg-coolGray-100 relative rounded-md p-3">
                <h3 className="text-sm font-medium leading-5">Effective Date</h3>

                <ul className="text-coolGray-500 mt-1 flex space-x-1 text-xs font-normal leading-4">
                  <li>{crossingData['EFFDATE']}</li>
                </ul>
                <a className="absolute inset-0 rounded-md ring-2 ring-red-400" />
              </li>
            ) : null}
            {!isEmptyOrSpaces(crossingData['EDATE']) ? (
              <li className="hover:bg-coolGray-100 relative rounded-md p-3">
                <h3 className="text-sm font-medium leading-5">Last Edited</h3>

                <ul className="text-coolGray-500 mt-1 flex space-x-1 text-xs font-normal leading-4">
                  <li>{crossingData['EDATE']}</li>
                </ul>
                <a className="absolute inset-0 rounded-md ring-2 ring-red-400" />
              </li>
            ) : null}
            {!isEmptyOrSpaces(crossingData['REASON']) ? (
              <li className="hover:bg-coolGray-100 relative rounded-md p-3">
                <h3 className="text-sm font-medium leading-5">Reason for Edit</h3>

                <ul className="text-coolGray-500 mt-1 flex space-x-1 text-xs font-normal leading-4">
                  <li>{reasonIdData[crossingData['REASON'] ?? 0]}</li>
                </ul>
                <a className="absolute inset-0 rounded-md ring-2 ring-red-400" />
              </li>
            ) : null}
            {!isEmptyOrSpaces(crossingData['ACC_LINK']) ? (
              <li className="hover:bg-coolGray-100 relative rounded-md p-3">
                <h3 className="text-sm font-medium leading-5">ACC Link</h3>

                <ul className="text-coolGray-500 mt-1 flex space-x-1 text-xs font-normal leading-4">
                  <li>
                    <a className="text-blue-400" href={crossingData['ACC_LINK']}>
                      Click Here
                    </a>
                  </li>
                </ul>
                <a
                  className="absolute inset-0 rounded-md ring-2 ring-red-400"
                  href={crossingData['ACC_LINK']}
                />
              </li>
            ) : null}
            {!isEmptyOrSpaces(crossingData['INV_LINK']) ? (
              <li className="hover:bg-coolGray-100 relative rounded-md p-3">
                <h3 className="text-sm font-medium leading-5">INV Link</h3>

                <ul className="text-coolGray-500 mt-1 flex space-x-1 text-xs font-normal leading-4">
                  <li>
                    <a className="text-blue-400" href={crossingData['INV_LINK']}>
                      Click Here
                    </a>
                  </li>
                </ul>
                <a
                  className="absolute inset-0 rounded-md ring-2 ring-red-400"
                  href={crossingData['INV_LINK']}
                />
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CrossingSidebarContent
