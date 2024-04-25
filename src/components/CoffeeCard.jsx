import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, getCoffees }) => {
  const { _id, Name, Chef, Taste, Details } = coffee;
  console.log(Name);

  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Delete confirmed");

        fetch(`https://coffee-store-server-beta-khaki.vercel.app/coffee/${_id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              getCoffees();
            }
          });
      }
    });
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="flex justify-between p-6">
        <div>
          <h2 className="card-title">{Name}</h2>
          <p>{Chef}</p>
          <p>{Details}</p>
          <p>{Taste}</p>
        </div>
        <div className="card-actions justify-center">
          <div className="join join-vertical">
            <button className="btn btn-outline join-item">View</button>
            <Link to={`/update-coffee/${_id}`}>
              <button className="btn w-full btn-outline btn-accent join-item">Edit</button>
            </Link>
            <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-error join-item">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CoffeeCard.propTypes = {
  coffee: PropTypes.object,
  getCoffees: PropTypes.func,
};

export default CoffeeCard;
