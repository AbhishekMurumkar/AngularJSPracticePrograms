async function unexpected(args) {
  const randomDelay1 = 2
  const randomDelay2 = 5000;
  console.log(args);
  try {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => resolve('Hello, World!'+args), args*1000);
      setTimeout(() => reject(new Error('Something went wrong'+args)), randomDelay2);
    });

    console.log("result="+result);
  } catch (error) {
    console.log(error.message);
  }
}

unexpected(0);
unexpected(9);
unexpected(2);
unexpected(3);
unexpected(4);
unexpected(5);
unexpected(6);
unexpected(7);
unexpected(8);
