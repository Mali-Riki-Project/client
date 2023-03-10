import { useParams } from 'react-router-dom';
import { TableRow,TableBody ,Button} from '@mui/material';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
//import Fab from '@mui/material/Fab';
///import EditIcon from '@mui/icons-material/Edit';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const ProjectItem = ({project}) => {
  const {address,city,status,apartmentBefore,apartmentAfter,requestYear,permitYear,startConstructionYear,populatingYear,description}=project

    return (
     <>
      {/* <Table sx={{ minWidth: 700 }} aria-label="customized table"> */}
       <TableBody>
          
             <StyledTableRow>
    
             <StyledTableCell >{address}</StyledTableCell>
             <StyledTableCell >{city}</StyledTableCell>
             <StyledTableCell >{status}</StyledTableCell>
             <StyledTableCell >{apartmentBefore}</StyledTableCell>
             <StyledTableCell >{apartmentAfter}</StyledTableCell>
             <StyledTableCell >{requestYear}</StyledTableCell>
             <StyledTableCell >{permitYear}</StyledTableCell>
             <StyledTableCell >{startConstructionYear}</StyledTableCell>
             <StyledTableCell >{populatingYear}</StyledTableCell>
             <StyledTableCell >{description}</StyledTableCell>
             <StyledTableCell >
{/* 
             <Fab   aria-label="edit">
          <EditIcon />
            </Fab>
 */}


             </StyledTableCell>

             
             </StyledTableRow>
           
        </TableBody>
      </>
    )
  }
  
  
  export default ProjectItem;   