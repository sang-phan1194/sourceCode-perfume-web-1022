import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase"

export const GetDatas = (dataType) => {
  const [datas, setDatas] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    let isQuery = true
    const getStoreData = async () => {
      const output = []
      const querySnapshot = await getDocs(collection(db, `${dataType}`))
      if (isQuery) {
        querySnapshot.forEach((doc) => {
          output.push({
            id: doc.id,
            productData: doc.data(),
          })
        })
        setDatas(output)
        setLoading(false)
      }
    }
    getStoreData()

    return () => {
      isQuery = false
    }
  }, [])

  return { isLoading, datas, setDatas }
}
