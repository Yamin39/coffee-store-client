import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const Name = form.Name.value;
    const Chef = form.Chef.value;
    const Supplier = form.Supplier.value;
    const Taste = form.Taste.value;
    const Category = form.Category.value;
    const Details = form.Details.value;
    const PhotoURL = form.PhotoURL.value;

    const coffee = {
      Name,
      Chef,
      Supplier,
      Taste,
      Category,
      Details,
      PhotoURL,
    };

    console.log(coffee);

    fetch("https://coffee-store-server-beta-khaki.vercel.app/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          form.reset();
        }
      });
  };
  return (
    <div>
      <h1 className="pb-10 text-5xl text-center underline font-bold">Add a Coffee</h1>

      <form onSubmit={handleSubmit}>
        <div className="space-y-4 w-fit mx-auto">
          {/* row 1 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* name */}
            <label className="input input-bordered flex items-center gap-2">
              Name
              <input name="Name" type="text" className="grow" placeholder="Enter coffee name" />
            </label>

            {/* Chef */}
            <label className="input input-bordered flex items-center gap-2">
              Chef
              <input name="Chef" type="text" className="grow" placeholder="Chef" />
            </label>
          </div>

          {/* row 2 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Supplier */}
            <label className="input input-bordered flex items-center gap-2">
              Supplier
              <input name="Supplier" type="text" className="grow" placeholder="Enter coffee supplier" />
            </label>

            {/* Taste */}
            <label className="input input-bordered flex items-center gap-2">
              Taste
              <input name="Taste" type="text" className="grow" placeholder="Taste" />
            </label>
          </div>

          {/* row 3 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Category */}
            <label className="input input-bordered flex items-center gap-2">
              Category
              <input name="Category" type="text" className="grow" placeholder="Enter coffee Category" />
            </label>

            {/* Details */}
            <label className="input input-bordered flex items-center gap-2">
              Details
              <input name="Details" type="text" className="grow" placeholder="Details" />
            </label>
          </div>

          {/* row 4 */}
          <div className="flex flex-col justify-center w-full gap-4">
            {/* PhotoURL */}
            <label className="w-full input input-bordered flex items-center gap-2">
              PhotoURL
              <input name="PhotoURL" type="text" className="grow" placeholder="PhotoURL" />
            </label>

            <input type="submit" className="btn btn-primary" value="Add Coffee" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
