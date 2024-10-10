import PropTypes from 'prop-types';

const Dook = ({ dook,idx }) => {
    
   

    const { recipe_name, preparing_time, calories } = dook;

    return (
        
            <div className="bg-slate-100 rounded-xl overflow-x-auto flex">
                <div className='pl-3 pt-2 font-bold'> <p>{idx+1}</p></div>
            <table className="table">
                <tbody>
                    <tr>
                        <th></th>
                        <td>{recipe_name}</td>
                        <td>{preparing_time}</td>
                        <td>{calories}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    
    );
};

Dook.propTypes = {
    dook: PropTypes.object ,
    idx:PropTypes.number
};

export default Dook;
