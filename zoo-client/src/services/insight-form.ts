export async function createReply(formData: FormData) {
  const content = formData.get('content');

  console.log(content);
}

export async function createNote(formData: FormData) {
  const content = formData.get('content');
  const images: File[] = [];

  for (const [key, value] of formData.entries()) {
    if (key.startsWith('image-') && value instanceof File) {
      images.push(value);
    }
  }

  console.log(content);
  console.log(images);
}
