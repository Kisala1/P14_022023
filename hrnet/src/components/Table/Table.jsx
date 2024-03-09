import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';

const Example = ({ datas }) => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'firstName',
        header: 'First Name',
        size: 130,
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
        size: 130,
      },
      {
        accessorKey: 'startDate',
        header: 'Start Date',
        size: 150,
      },
      {
        accessorKey: 'department',
        header: 'Department',
        size: 150,
      },
      {
        accessorKey: 'dateBirth',
        header: 'Date of Birth',
        size: 150,
      },
      {
        accessorKey: 'street',
        header: 'Street',
        size: 200,
      },
      {
        accessorKey: 'city',
        header: 'City',
        size: 150,
      },
      {
        accessorKey: 'state',
        header: 'State',
        size: 150,
      },
      {
        accessorKey: 'zipCode',
        header: 'Zip Code',
        size: 100,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: datas.length ? datas : [],
    muiTableBodyProps: {
      sx: {
        '& tr:nth-of-type(odd) > td': {
          backgroundColor: 'rgba(110, 133, 17, 0.3)',
        },
      },
    },
    mrtTheme: {
      baseBackgroundColor: 'rgba(147, 173, 24, 0.1)',
    },
  });

  return <MaterialReactTable table={table} />;
};

export default Example;
