import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Header from "../components/Header";

// Static data for demonstration purposes
const staticPageData = [
  {
    _id: "1",
    coverImage:
      "https://res.cloudinary.com/dnsugnxqi/image/upload/v1722078596/icon_hmtkb4.jpg",
    name: "Advanced Mathematics Contest",
    alias: "Math Contest 2024",
    description:
      "Participate in one of the most challenging math contests for high school students, featuring questions on algebra, geometry, and number theory.",
    articleData: [
      {
        _id: "a1",
        courseid: {
          icon: "https://res.cloudinary.com/dnsugnxqi/image/upload/v1722078457/samples/dessert-on-a-plate.jpg",
          course: "Algebra Course",
        },
        articles: [
          {
            _id: "art1",
            title: "Introduction to Algebra",
            description:
              "Learn the basics of algebra, including variables, expressions, and equations. Perfect for beginners.",
          },
          {
            _id: "art2",
            title: "Advanced Algebra Techniques",
            description:
              "Delve into complex algebraic techniques used in problem-solving, including polynomial factorization and quadratic equations.",
          },
        ],
      },
      {
        _id: "a2",
        courseid: {
          icon: "https://res.cloudinary.com/dnsugnxqi/image/upload/v1722078488/samples/dessert-on-a-plate-2.jpg",
          course: "Geometry Course",
        },
        articles: [
          {
            _id: "art3",
            title: "Fundamentals of Geometry",
            description:
              "An overview of essential geometry concepts, such as angles, triangles, and circles.",
          },
          {
            _id: "art4",
            title: "Geometry in Real Life",
            description:
              "Explore how geometric principles are applied in architecture, engineering, and art.",
          },
        ],
      },
    ],
  },
  {
    _id: "2",
    coverImage:
      "https://res.cloudinary.com/dnsugnxqi/image/upload/v1722078596/icon_hmtkb4.jpg",
    name: "Advanced Mathematics Contest",
    alias: "Math Contest 2024",
    description:
      "Participate in one of the most challenging math contests for high school students, featuring questions on algebra, geometry, and number theory.",
    articleData: [
      {
        _id: "b1",
        courseid: {
          icon: "https://res.cloudinary.com/dnsugnxqi/image/upload/v1722078457/samples/dessert-on-a-plate.jpg",
          course: "Algebra Course",
        },
        articles: [
          {
            _id: "art1",
            title: "Introduction to Algebra",
            description:
              "Learn the basics of algebra, including variables, expressions, and equations. Perfect for beginners.",
          },
          {
            _id: "art2",
            title: "Advanced Algebra Techniques",
            description:
              "Delve into complex algebraic techniques used in problem-solving, including polynomial factorization and quadratic equations.",
          },
        ],
      },
      {
        _id: "b2",
        courseid: {
          icon: "https://res.cloudinary.com/dnsugnxqi/image/upload/v1722078488/samples/dessert-on-a-plate-2.jpg",
          course: "Geometry Course",
        },
        articles: [
          {
            _id: "art3",
            title: "Fundamentals of Geometry",
            description:
              "An overview of essential geometry concepts, such as angles, triangles, and circles.",
          },
          {
            _id: "art4",
            title: "Geometry in Real Life",
            description:
              "Explore how geometric principles are applied in architecture, engineering, and art.",
          },
        ],
      },
    ],
  },
  {
    _id: "3",
    coverImage:
      "https://res.cloudinary.com/dnsugnxqi/image/upload/v1722078596/icon_hmtkb4.jpg",
    name: "Advanced Mathematics Contest",
    alias: "Math Contest 2024",
    description:
      "Participate in one of the most challenging math contests for high school students, featuring questions on algebra, geometry, and number theory.",
    articleData: [
      {
        _id: "c1",
        courseid: {
          icon: "https://res.cloudinary.com/dnsugnxqi/image/upload/v1722078457/samples/dessert-on-a-plate.jpg",
          course: "Algebra Course",
        },
        articles: [
          {
            _id: "art1",
            title: "Introduction to Algebra",
            description:
              "Learn the basics of algebra, including variables, expressions, and equations. Perfect for beginners.",
          },
          {
            _id: "art2",
            title: "Advanced Algebra Techniques",
            description:
              "Delve into complex algebraic techniques used in problem-solving, including polynomial factorization and quadratic equations.",
          },
        ],
      },
      {
        _id: "c2",
        courseid: {
          icon: "https://res.cloudinary.com/dnsugnxqi/image/upload/v1722078488/samples/dessert-on-a-plate-2.jpg",
          course: "Geometry Course",
        },
        articles: [
          {
            _id: "art3",
            title: "Fundamentals of Geometry",
            description:
              "An overview of essential geometry concepts, such as angles, triangles, and circles.",
          },
          {
            _id: "art4",
            title: "Geometry in Real Life",
            description:
              "Explore how geometric principles are applied in architecture, engineering, and art.",
          },
        ],
      },
    ],
  },
  // Add more contests for richer content
];

const Lesson = () => {
  const [expandedArticles, setExpandedArticles] = useState({});

  // Toggle function for "Read More"
  const toggleReadMore = (articleId) => {
    setExpandedArticles((prevState) => ({
      ...prevState,
      [articleId]: !prevState[articleId], // Toggle the specific article's expanded state
    }));
  };

  return (
    <View>
      <Header />
      <ScrollView contentContainerStyle={styles.container}>
        {staticPageData.map((contest) => (
          <View key={contest._id} style={styles.card}>
            {/* Contest Image */}
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: contest.coverImage }}
                style={styles.image}
              />
              <Text style={styles.title}>{contest.alias || contest.name}</Text>
            </View>

            {/* Contest Details */}
            <View style={styles.detailsContainer}>
              <Text style={styles.description}>{contest.description}</Text>

              {/* Article Data */}
              {contest.articleData.map((article) => (
                <View key={article._id} style={styles.articleContainer}>
                  {/* Course Icon and Info */}
                  <View style={styles.courseInfo}>
                    {article.courseid.icon && (
                      <Image
                        source={{ uri: article.courseid.icon }}
                        style={styles.courseIcon}
                      />
                    )}
                    <View>
                      <Text style={styles.courseName}>
                        {article.courseid.course}
                      </Text>
                      <Text style={styles.articleCount}>
                        {article.articles.length} articles
                      </Text>
                    </View>
                  </View>

                  {/* Expanded Article Data */}
                  {expandedArticles[article._id] && (
                    <View style={styles.expandedArticles}>
                      {article.articles.map((singleArticle) => (
                        <View
                          key={singleArticle._id}
                          style={styles.singleArticle}
                        >
                          <Text style={styles.articleTitle}>
                            {singleArticle.title}
                          </Text>
                          <Text style={styles.articleDescription}>
                            {singleArticle.description.substring(0, 100)}...
                          </Text>
                          <TouchableOpacity>
                            <Text style={styles.viewLessonButton}>
                              View Lesson
                            </Text>
                          </TouchableOpacity>
                        </View>
                      ))}
                    </View>
                  )}

                  {/* "Read More" Button */}
                  <View style={styles.readMoreContainer}>
                    <Text style={styles.articleCount}>
                      Articles Available: {article.articles.length}
                    </Text>
                    <TouchableOpacity
                      onPress={() => toggleReadMore(article._id)}
                    >
                      <Text style={styles.readMoreButton}>
                        {expandedArticles[article._id]
                          ? "Show Less"
                          : "Read More"}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f0f0f0",
    paddingBottom: 150,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    position: "absolute",
    bottom: 10,
    left: 10,
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.7)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 8,
  },
  detailsContainer: {
    padding: 15,
  },
  description: {
    fontSize: 16,
    color: "#444",
    marginBottom: 12,
  },
  articleContainer: {
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    padding: 10,
  },
  courseInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  courseIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  courseName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  articleCount: {
    fontSize: 13,
    color: "#666",
  },
  expandedArticles: {
    marginTop: 10,
  },
  singleArticle: {
    backgroundColor: "#e0e0e0",
    padding: 12,
    borderRadius: 5,
    marginBottom: 8,
  },
  articleTitle: {
    fontSize: 17,
    fontWeight: "bold",
  },
  articleDescription: {
    fontSize: 14,
    color: "#555",
    marginVertical: 5,
  },
  viewLessonButton: {
    color: "#1e90ff",
    fontWeight: "bold",
    marginTop: 5,
  },
  readMoreContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  readMoreButton: {
    color: "#1e90ff",
    fontWeight: "bold",
  },
});

export default Lesson;
