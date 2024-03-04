import Image from "next/image";

export default function Home() {
  async function uploadFiles(formData: FormData) {
    'use server';

    // filter out $ACTION_ID form element
    const fixedFormData = new FormData();
    formData.forEach((val, key) => { if (key === "file") fixedFormData.append(key, val); });

    fetch(`${process.env.API_HOST}/upload`, { method: "POST", body: fixedFormData }).then(async (resp) => {
      const body = await resp.text();
      console.log(body);
    });
  }

  return (
    <main className="flex flex-col items-center justify-between p-24">
      hello
      <form action={uploadFiles}>
        <div>
          <label htmlFor="file" hidden>Choose files to upload</label>
          <input type="file" id="file" name="file" multiple />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </main>
  );
}
