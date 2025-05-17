import Image from "next/image";
import Link from "next/link";

const url = "https://www.course-api.com/react-tours-project";

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

const fetchTours = async () => {
  const res = await fetch(url);
  const data: Tour[] = await res.json();
  return data;
};

async function ToursPage() {
  const data = await fetchTours();
  console.log(data);
  return (
    <section>
      <h1 className="text-3xl mb-4">Tours</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {data.map((tour) => (
          <Link
            key={`link.${tour.id}`}
            href={`/tours/${tour.id}`}
            className="hover:text-blue-500"
          >
            <div className="relative h-48 mb-2">
              <Image
                key={`img.${tour.id}`}
                src={tour.image}
                alt={tour.name}
                fill
                sizes="100vw"
                priority
                className="object-cover rounded"
              />
            </div>
            <h2 key={`h2.${tour.id}`} key={tour.id}>
              {tour.name}
            </h2>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ToursPage;
