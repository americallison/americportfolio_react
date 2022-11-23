import React, {useState, useEffect} from 'react';
import  {doc, getDoc} from "firebase/firestore/lite"
import { FireBaseDB } from '../db/firebase';

export default function PostAuthorCard({authorId}) {
    const [author, setAuthor] = useState({});
    
    useEffect (() => {
        return async () => {
            const ref = doc(FireBaseDB, "users", authorId);
            const docSnap = await getDoc(ref);
            if (docSnap.exists()) {
               const author = docSnap.data();
               setAuthor(author)
            }
            else {
                console.log("No such document")
            }
        }
    }, []);

    return (
        <>
        <div class="flex-shrink-0">
                          <a href="#">
                            <span class="sr-only">{`${author.firstname} ${author.lastname}`}</span>
                            <img
                              class="h-10 w-10 rounded-full"
                              src={author.img_url}
                              alt=""
                            />
                          </a>
                        </div>
                        <div class="ml-3">
                          <p class="text-sm font-medium text-gray-900">
                            <a href="#" class="hover:underline">
                              {`${author.firstname} ${author.lastname}`}
                            </a>
                          </p>
                          <div class="flex space-x-1 text-sm text-gray-500">
                            <time dateTime="2020-03-16">
                           {new Date(author.created_at).toLocaleDateString("en", {
                            weekday: "short",
                            day: "numeric"
                           })}
                            </time>
                            <span aria-hidden="true">&middot;</span>
                            <span>6 min read</span>
                          </div>
                        </div>
        </>
    )
}