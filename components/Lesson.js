import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For adding icons
import { Link, useRoute } from '@react-navigation/native';

export default function Lesson() {
  const [expandedCourse, setExpandedCourse] = useState(null);
  const route = useRoute();
  const { contestName } = route.params || {};
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleExpand = (courseId, articleIndex) => {
    const uniqueKey = `${courseId}-${articleIndex}`;
    setExpandedCourse(expandedCourse === uniqueKey ? null : uniqueKey);
  };

  useEffect(() => {
    if (contestName) {
      const getContestApi = `https://server.panini8.com/api/v1/article/contest/lessons?contest=${contestName}`;

      fetch(getContestApi)
        .then((response) => response.json())
        .then((json) => {
          console.log("Fetched Lessons Data:", json);
          setLessons(json);
        })
        .catch((error) => console.error("Error fetching lessons data:", error))
        .finally(() => setLoading(false));
    }
  }, [contestName]);

  return (
    <View style={styles.flexContainer}>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Study Material</Text>
        {lessons?.contest?.articleData?.length > 0 ? (
          lessons?.contest?.articleData.map((item, index) => (
            <View key={index}>

  {item?.courseid?.course ? (
    <>
    <View  style={styles.courseContainer}>
      <Text style={styles.courseTitle}>{item.courseid.course || item.name}</Text>
      {item.articles && item.articles.length > 0 ? (
        item.articles.map((article, articleIndex) => {
          const uniqueKey = `${item.id}-${articleIndex}`;
          return (
            <View key={articleIndex}>
              <TouchableOpacity
                style={styles.articleDropdown}
                onPress={() => toggleExpand(item.id, articleIndex)}
              >
                <View style={styles.flexRow}>
                  <View className="flex-row justify-between w-full">
                    <Text style={styles.articleTitle}>
                      {article.title}
                    </Text>
                    <Ionicons
                      name={expandedCourse === uniqueKey ? 'chevron-up' : 'chevron-down'}
                      size={18}
                      color="#333"
                    />
                  </View>
                  {expandedCourse === uniqueKey && (
                    <View style={styles.articleContent}>
                      <Text style={styles.articleDescription}>{article.description}</Text>
                        <Link
                            to={{ screen: 'Dash', params: { id: 'jane' } }}
                            style={styles.linkText}
                            >
                            Read more
                        </Link>
                    </View>
                  )}
                </View>
                
              </TouchableOpacity>
              
            </View>
          );
        })
      ) : (
        <Text style={styles.noArticlesText}>No articles available for this course.</Text>
      )}
      </View> 
    </>
  ) : null}
            </View>


          ))
        ) : (
          <Text style={styles.noArticlesText}>No study materials available.</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    alignItems: "center"
  },
  linkText: {
    color: 'blue',
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    margin: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    elevation: 3,
    width: "100%",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  courseContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    elevation: 3,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  noArticlesText: {
    fontSize: 14,
    color: '#888',
  },
  articleDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 6,
    marginTop: 8,
  },
  articleTitle: {
    fontSize: 14,
    color: '#333',
    fontWeight: "bold"
  },
  articleContent: {
    marginTop: 8,
    paddingLeft: 10,
  },
  articleDescription: {
    fontSize: 14,
    color: '#555',
  },
  flexRow: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
