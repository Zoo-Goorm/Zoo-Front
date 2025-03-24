'use server';
export async function createReply(formData: FormData) {
  const content = formData.get('content');

  console.log(content);
}

export async function createNote(formData: FormData) {
  const content = formData.get('content');
  const anon = formData?.get('anon');
  const visible = formData?.get('public');
  // const images =
  //   formData?.getAll('images').length > 0 ? formData.getAll('images') : null;
  // const vote =
  //   formData?.getAll('vote').length > 0 ? formData.getAll('vote') : null;

  console.log(content);
  console.log(anon);
  console.log(visible);
}
