import items from "./Blog.items.js";

const Blog = () => {
  return (
    <section className="wrap bg-bg flex flex-col gap-10 mt-28  py-10 lg:gap-16 lg:py-16 xl:gap-24 xl:mt-44 xl:py-16">
      <h3 className="text-center font-medium text-[28px] xs:text-3xl  sm:text-4xl lg:text-5xl">
        Featured Blog
      </h3>
      <div className="grid grid-cols-1 max-w-[374px] sm:grid-cols-2 sm:max-w-[776px] lg:grid-cols-3 lg:max-w-[1196px] mx-auto gap-y-7 gap-x-7 ">
        {items.map((i) => (
          <BlogItem key={i.id} {...i} />
        ))}
      </div>
    </section>
  );
};

const BlogItem = ({ title, category, date, image, profile_photo, author }) => {
  return (
    <div
      className="w-full aspect-[19/21] bg-cover bg-center bg-no-repeat relative flex cursor-pointer"
      style={{ backgroundImage: `url(${image})` }}>
      <div className="absolute flex right-4 top-4 bg-[#F3F3F3] w-16 h-16 justify-center items-center">
        <p className="w-12 text-center leading-6 text-xl text-accent">{date}</p>
      </div>
      <div className="self-end flex flex-col gap-5 pb-8 justify-end items-center w-full h-72 bg-gradient-to-t from-[rgba(18,70,58,0.92)] from-0% to-[rgba(18,70,58,0.00)]">
        <h6 className="bg-dark w-5/12 py-1 text-center text-white text-lg">{category}</h6>
        <h4 className="text-center text-white text-2xl w-4/5">{title}</h4>
        <div className="flex w-full items-center gap-2 justify-center">
          <div className="text-white">Posted by </div>
          <img src={profile_photo} alt={author} className="rounded-full w-9" />
          <div className="text-white">{author}</div>
          <img src="/assets/ui/mail.svg" alt="mail" />
          <img src="/assets/ui/share.svg" alt="share" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
