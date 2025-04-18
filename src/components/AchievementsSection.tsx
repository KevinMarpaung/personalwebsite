import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Grip } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { achievements } from "@/data/achievements";

const AchievementsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollPosition =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    document.body.style.cursor = "grabbing";
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.body.style.cursor = "default";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      document.body.style.cursor = "default";
    }
  };

  return (
    <section id="achievements" className="pt-14 bg-background/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">Achievements</h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            I worked with a range of technologies in the web development world,
            from frontend to backend and everything in between.
          </p>
        </motion.div>

        <div className="flex justify-between mb-6 space-x-2">
          <div className="flex items-center text-muted-foreground">
            <Grip className="h-4 w-4 mr-2" />
            <span className="text-sm hidden md:inline">Drag to explore</span>
            <span className="text-sm md:hidden">Swipe to explore</span>
          </div>
          <div className="flex space-x-2">
            <Button
              onClick={() => scroll("left")}
              variant="outline"
              size="icon"
              className="rounded-full"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              onClick={() => scroll("right")}
              variant="outline"
              size="icon"
              className="rounded-full"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-6 space-x-6 snap-x scrollbar-hidden cursor-grab "
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              className="min-w-[300px] max-w-[300px] bg-card p-6 rounded-lg shadow-sm border border-border snap-center select-none"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.2 },
              }}
            >
              <div className="flex items-center mb-4 h-20">
                <div className="p-2 rounded-full mr-3 bg-muted text-muted-foreground ">
                  <achievement.icon className="h-5 w-5" />
                </div>
                <div className=" ">
                  <p className="text-sm font-normal text-muted-foreground ">
                    {achievement.issuer}
                  </p>
                  <h3 className="text-lg font-semibold text-foreground flex  ">
                    {achievement.title}
                  </h3>
                </div>
              </div>
              <p
                className={`text-base font-normal text-muted-foreground mb-4 ${
                  expandedId === achievement.id ? "" : "truncate"
                } cursor-pointer`}
                onClick={() =>
                  setExpandedId(
                    expandedId === achievement.id ? null : achievement.id
                  )
                }
              >
                {achievement.description}
              </p>
              {achievement.certificateImage && (
                <div className="mb-4">
                  <img
                    src={achievement.certificateImage}
                    alt="Certificate"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              )}
              {achievement.certificateUrl && (
                <Button asChild className="mt-2 flex" variant="default">
                  <a
                    href={achievement.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                  </a>
                </Button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
