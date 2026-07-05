interface FeedbackProps {
  onNavigate: (page: string) => void;
}


const Feedback = ({ onNavigate }: FeedbackProps) => {

    return (
        <div className="h-screen mb-3 mt-3">
            <h1 className="mb-3 text-center text-5xl font-bold text-black">
                Your purchase has been made! How was your experience?
            </h1>

            <form
          className="space-y-5"
          onSubmit={() => onNavigate("home")}
        >
          <div className=" gap-4">
            <div>
              <label className="block text-sm mb-2">
                Out of 10, how easy was it to make your purchase?
              </label>

              <select
                className="w-full border rounded px-3 py-2"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-2">
                Were you able to find what you were looking for?
              </label>

              <select
                className="w-full border rounded px-3 py-2"
              >
                <option>Yes</option>
                <option>No</option>
                
              </select>
            </div>

            <div>
              <label className="block text-sm mb-2">
                Out of 10, how easy was it to make this purchase?
              </label>

              <select
                className="w-full border rounded px-3 py-2"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
            </div>
          </div>

          <button

            className="btn w-full"
            type="submit"
            onClick={() => alert("Your feedback has been submitted!")}
          >
            Submit Form
          </button>
        </form>

        </div>
    )
}

export default Feedback;