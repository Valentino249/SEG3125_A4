interface CheckoutProps {
  onNavigate: (page: string) => void;
}


const Checkout = ({ onNavigate }: CheckoutProps) => {


    return (
        <div className="h-screen mb-3 mt-3">
            <h1 className="mb-3 text-center text-5xl font-bold text-black">
                Checkout
            </h1>

            {/* <form onSubmit={handleSubmit} className="flex justify-center items-center gap-2 mb-3 text-black">

                <input name="first-name" className=" border-2"></input>
            </form> */}

            <form
          className="space-y-5"
          onSubmit={() => onNavigate("feedback")}
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-2">
                First name
              </label>

              <input
                type="text"
                placeholder="Jane"
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">
                Last name
              </label>

              <input
                type="text"
                placeholder="Smitherton"
                className="w-full border rounded px-3 py-2"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2">
              Email address
            </label>

            <input
              type="email"
              placeholder="email@example.com"
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-2">
                Credit Card #
              </label>

              <input
                type="text"
                placeholder="####-####-####-####"
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">
                Expiration Date
              </label>

              <input
                type="text"
                placeholder="YY-MM-DD"
                className="w-full border rounded px-3 py-2"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm mb-2">
              Security Code
            </label>

            <input
              type="email"
              placeholder="###"
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <button
           
            className="btn w-full"
            type="submit"
          >
            Place Order
          </button>
        </form>

        </div>
    )
}

export default Checkout;