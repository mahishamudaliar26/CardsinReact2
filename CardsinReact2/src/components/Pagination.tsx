import 'bootstrap/dist/css/bootstrap.min.css';  
import { Pagination } from 'react-bootstrap';  
function PaginationBasic() {  
  return (  
    <>  
    <div className='container p-2'>  
   <Pagination size='lg'>  
     <Pagination.Item>1</Pagination.Item>  
     <Pagination.Item active>2</Pagination.Item>  
     <Pagination.Item>3</Pagination.Item>  
     <Pagination.Item>4</Pagination.Item>  
     <Pagination.Item>5</Pagination.Item>  
   </Pagination>  
   <Pagination size='sm'>  
     <Pagination.Item>1</Pagination.Item>  
     <Pagination.Item active>2</Pagination.Item>  
     <Pagination.Item>3</Pagination.Item>  
     <Pagination.Item>4</Pagination.Item>  
     <Pagination.Item>5</Pagination.Item>  
   </Pagination>  
   </div>  
    </>  
  );  
}  
export default PaginationBasic;  