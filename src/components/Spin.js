import spin from './image/loading.gif'
import './Spin.css';
export const Spin = ()=> {
    
        return (
            <div className='text-center'>
              <img src={spin} alt=""  style={{
                width: '50px',
                height: '50px'
              }}/>
            </div>
        )
    
}
